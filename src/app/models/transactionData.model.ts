export class TransactionData {
  constructor(
    public description: string,
    public amount: number,
    public type : string,
    public time: Date
  ) {}

}