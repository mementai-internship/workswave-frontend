declare namespace daum {
  export class Postcode {
    constructor(options: PostcodeOptions);
    open(): void;
  }

  interface PostcodeOptions {
    oncomplete: (data: IPostcodeData) => void;
    left: number;
    top: number;
  }

  interface IPostcodeData {
    address: string;
    addressEnglish: string;
    addressType: string;
    bname: string;
    buildingName: string;
  }
}

interface IWindow {
  daum: typeof daum;
}
