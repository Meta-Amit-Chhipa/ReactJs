import ParentClass from "./ParentClass";

export default class Example extends  ParentClass{
    constructor(props) {
      super();
    }
    render() {
      this.callMe();
      return false;
    }
  }