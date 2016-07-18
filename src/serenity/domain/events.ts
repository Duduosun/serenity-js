import { Activity, Outcome, PhotoReceipt, Scene } from './model';
import * as moment from 'moment';

export class DomainEvent<T> {
    constructor(public value: T, public timestamp?: number) {
        this.timestamp = timestamp || moment().valueOf();
    }
}

export class SceneStarts        extends DomainEvent<Scene> {}
export class ActivityStarts     extends DomainEvent<Activity> {}
export class ActivityFinished   extends DomainEvent<Outcome<Activity>> {}
export class SceneFinished      extends DomainEvent<Outcome<Scene>> {}
export class PhotoTaken         extends DomainEvent<PhotoReceipt> {}
