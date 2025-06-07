
/**
 * ModuleConfiguration class represents the configuration of a code module or component.
 */
export default class ModuleConfiguration {

    /*
    
    CREATE TABLE [dbo].[ModuleConfiguration](
        [ModuleConfigurationId] [uniqueidentifier] NOT NULL,
        [ProgrammeId] [int] NOT NULL,
        [Module] [nvarchar](350) NOT NULL,
        [Type] [nvarchar](50) NOT NULL,
        [SchemaVersion] [int] NOT NULL,
        [JsonConfiguration] [nvarchar](max) NOT NULL,
        [SupplierId] [int] NULL,
     CONSTRAINT [PK_ModuleConfiguration] PRIMARY KEY CLUSTERED 
    (
        [ModuleConfigurationId] ASC
    )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
    GO
    
    ALTER TABLE [dbo].[ModuleConfiguration]  WITH CHECK ADD  CONSTRAINT [FK_ModuleConfiguration_Programme] FOREIGN KEY([ProgrammeId])
    REFERENCES [dbo].[Programme] ([ProgrammeID])
    GO
    
    ALTER TABLE [dbo].[ModuleConfiguration] CHECK CONSTRAINT [FK_ModuleConfiguration_Programme]
    GO
    
    */

    /**
     *
     */
    constructor() {

    }

    private _moduleConfigurationId!: string;
    public get moduleConfigurationId(): string {
        return this._moduleConfigurationId;
    }
    public set moduleConfigurationId(v: string) {
        this._moduleConfigurationId = v;
    }

    private _programmeId!: number;
    public get programmeId(): number {
        return this._programmeId;
    }
    public set programmeId(v: number) {
        this._programmeId = v;
    }

}