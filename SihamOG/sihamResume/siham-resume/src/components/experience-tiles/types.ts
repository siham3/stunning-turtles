
export interface JobInfo{
    description: string[];
    jobLength: string;
}

export interface JobExperience {
    id:number;
    jobTitle: string;
    jobName: string;
    jobInfo: JobInfo;
    active: number;
}
