
/**
 * Represents a Schedule.
 */
export default class Schedule {

    // [ScheduleID] [int] IDENTITY(1,1) NOT NULL,
    // [CreatedDate] [datetime] NOT NULL,
    // [CreatedByID] [int] NOT NULL,
    // [UpdatedDate] [datetime] NOT NULL,
    // [UpdatedByID] [int] NOT NULL,
    // [Deleted] [bit] NOT NULL,
    // [RowVersion] [timestamp] NOT NULL,
    // [Cron] [varchar](128) NOT NULL,
    // [ScheduleStatusID] [tinyint] NOT NULL,
    // [ModuleConfigurationID] [uniqueidentifier] NOT NULL,
    // [Enabled] [bit] NOT NULL,
    // [LastRunDate] [datetime] NULL,

    /**
     *
     */
    // constructor(
    //     scheduleId: number, cron: string, enabled: boolean, deleted: boolean, lastRunDate: Date | null
    // ) {
    //     this._scheduleId = scheduleId;
    //     this._cron = cron;
    //     this._enabled = enabled;
    //     this._deleted = deleted;
    //     this._lastRunDate = lastRunDate
    // }

    /**
     *
     */
    constructor() {

    }

    private _scheduleId!: number;
    public get scheduleId(): number {
        return this._scheduleId;
    }
    public set scheduleId(v: number) {
        this._scheduleId = v;
    }

    private _cron!: string;
    public get cron(): string {
        return this._cron;
    }
    public set cron(v: string) {
        this._cron = v;
    }

    private _enabled!: boolean;
    public get enabled(): boolean {
        return this._enabled;
    }
    public set enabled(v: boolean) {
        this._enabled = v;
    }

    private _deleted!: boolean;
    public get deleted(): boolean {
        return this._deleted;
    }
    public set deleted(v: boolean) {
        this._deleted = v;
    }

    private _lastRunDate!: Date | null;
    public get lastRunDate(): Date | null {
        return this._lastRunDate;
    }
    public set lastRunDate(v: Date | null) {
        this._lastRunDate = v;
    }

}
