import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Asignatura extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'number',
  })
  asignaturaNro?: number;

  @property({
    type: 'number',
  })
  IdAsignarutas?: number;

  @property({
    type: 'string',
    required: true,
  })
  detalle: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoAsignatura: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoCiclo: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoFormacion: string;
  @property({
    type: 'number',
  })
  curso?: number;
  @property({
    type: 'number',
  })
  meses?: number;
  @property({
    type: 'number',
  })
  horasCatedraAnuales?: number;
  @property({
    type: 'number',
  })
  horasCatedraSemanales?: number;
  @property({
    type: 'date',
    required: true,
  })
  fechaCreacion: Date;
  @property({
    type: 'date',
  })
  fechaModificacion?: Date;
  @property({
    type: 'boolean',
  })
  activo?: boolean;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Asignatura>) {
    super(data);
  }
}

export interface AsignaturaRelations {
  // describe navigational properties here
}

export type AsignaturaWithRelations = Asignatura & AsignaturaRelations;
