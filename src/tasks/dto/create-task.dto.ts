export class CreateTaskDto {
  readonly id: number;
  readonly groupId: number;
  readonly title: string;
  readonly deadline: Date;
  readonly responsible: string;
  readonly status: string;
  readonly createdDate: Date;
  readonly tags: string[];
  // readonly prichinaProsrochki: string;
  readonly dataNachalaProizvodstva: Date;
  readonly napravlenieDeyatelnostiUTS: string;
  readonly manager: string;
  readonly stadiya: string;
  readonly naimenovanieProdukcii: string;
  readonly FISborshika: string;
  readonly proizvodstvenniUchastor: string;
}
