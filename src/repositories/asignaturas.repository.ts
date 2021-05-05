import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Asignaturas, AsignaturasRelations} from '../models';

export class AsignaturasRepository extends DefaultCrudRepository<
  Asignaturas,
  typeof Asignaturas.prototype._id,
  AsignaturasRelations
> {
  constructor(@inject('datasources.mongodb') dataSource: MongodbDataSource) {
    super(Asignaturas, dataSource);
  }
}
