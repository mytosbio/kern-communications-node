import pino from "pino";
import { Observable } from "rxjs";

import { sleep } from "./async-utilities";

import { Connection } from "./connection";
import { MILLISECONDS_PER_MINUTE } from "./constants";
import { parseStringBytes, parseSignedIntegerBytes } from "./data-utilities";
import { RequestFrameData } from "./message-frame";

const logger = pino({ name: "flow-meter:device" });

enum DeviceCommand {
    Cancel = "@",
    ListAllImplementedKcpCommands = "I0",
    QueryKcpLevelsAndKcpVersions = "I1",
    QueryDeviceInformationTypeCapacity = "I2",
    QueryDeviceSoftwareVersion = "I3",
    QuerySerialNumber = "I4",
    QuerySoftwareIdentificationNumber = "I5",
    QuerySetBalanceExternalModelNumber = "IBIM",
}

enum ResponseStatus {
    /**
     * Used to indicate an intimidate response
     */
    Begun = "B",
    /**
     * Used to indicate the final accepted response
     */
    Accepted = "A",
    /**
     * Logical error or invalid parameter
     */
    LogicalError = "L",
    /**
     * Internal or technical error
     */
    InternalError = "I",
}

/**
 * Device represents a Sensirion sensor
 */
export class Device {
    private connection: Connection;
    /**
     * Create a new device which uses a connection
     * @param connection - Connection use to communicate
     */
    constructor(connection: Connection) {
        this.connection = connection;
    }
    /**
     * Make a device request and parse response
     * @param commandId - Command id
     * @param commandArguments - Command data
     * @returns Parsed command data
     */
    protected async makeRequest(
        commandId: string,
        commandArguments: string[],
    ): Promise<number[]> {
        const requestData: RequestFrameData = {
            slaveAddress,
            commandId,
            commandArguments,
        };
        const responseData = await this.connection.transceive(requestData);
        return responseData.commandArguments;
    }
}

enum Command {
    SetIndicationUnit = "U",
}

enum IndicationUnit {
    Grams = "g",
    Invalid = "X",
}

type WeightValue = {
    stable: boolean;
    weightValue: number;
    unit: string;
};

/**
 * Kern lab balance
 */
export class KernLabBalance extends Device {
    /**
     * Set the balance indication unit
     * @param indicationUnit - Unit the balance should use
     */
    async setIndicationUnit(indicationUnit: IndicationUnit): Promise<void> {
        await this.makeRequest(Command.SetIndicationUnit, [indicationUnit]);
    }
    /**
     * Send the weight value and continue to stream the weight
     * @param millisecondsBetweenTransmissions - Delay between transmissions
     */
    sendWeightValueImmediatelyAndRepeat(
        millisecondsBetweenTransmissions: number,
    ): Observable<WeightValue> {
        return new Observable();
    }
}
