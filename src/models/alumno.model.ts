import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Alumno extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  alumnoNro: number;

  @property({
    type: 'array',
    itemType: 'object',
  })
  adultos?: object[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  estadoCursadas?: object[];

  @property({
    type: 'string',
  })
  legajo?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'number',
  })
  alumnoId?: number;

  @property({
    type: 'string',
  })
  dni?: string;

  @property({
    type: 'string',
  })
  tipoDni?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreCompleto: string;

  @property({
    type: 'date',
  })
  fechaNacimiento?: string;

  @property({
    type: 'string',
    default: 'MASCULINO',
  })
  sexo?: string;

  @property({
    type: 'string',
  })
  nacionalidad?: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  @property({
    type: 'string',
  })
  celular?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'date',
  })
  fechaIngreso?: string;

  @property({
    type: 'string',
  })
  procedenciaColegioPrimario?: string;

  @property({
    type: 'string',
  })
  procedenciaColegioSecundario?: string;

  @property({
    type: 'string',
  })
  fechaDeBaja?: string;

  @property({
    type: 'string',
  })
  motivoDeBaja?: string;

  @property({
    type: 'string',
  })
  cantidadIntegranteGrupoFamiliar?: string;

  @property({
    type: 'string',
  })
  seguimientoEtap?: string;

  @property({
    type: 'string',
  })
  nombreCompletoTae?: string;

  @property({
    type: 'string',
  })
  emailTae?: string;

  @property({
    type: 'string',
  })
  archivoDiagnostico?: string;

  @property({
    type: 'string',
  })
  observaciones?: string;

  @property({
    type: 'string',
  })
  observacionTelefono?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaCreacion: string;

  @property({
    type: 'date',
  })
  fechaModificacion?: string;

  @property({
    type: 'boolean',
  })
  activo?: boolean;

  @property({
    type: 'boolean',
  })
  incompleto?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Alumno>) {
    super(data);
  }
}

export interface AlumnoRelations {
  // describe navigational properties here
}

export type AlumnoWithRelations = Alumno & AlumnoRelations;
