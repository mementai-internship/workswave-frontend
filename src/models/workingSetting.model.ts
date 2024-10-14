export interface IWorkingSettingPartResponse {
  id: string;
  position: string;
  positionColor: 'gray' | 'pink' | 'orange' | 'green' | 'blue';
  tasks: string;
  division: '의사' | '일반';
  isCertificated: boolean;
}
