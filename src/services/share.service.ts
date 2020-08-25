import { EventEmitter, Injectable} from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class shareService {
    private subjectSelector: number;
    private fetchSubject: EventEmitter<boolean> = new EventEmitter<boolean>();
    getSubjectValue() {
        return this.subjectSelector;
      }
      setSubjectValue(count: number): void {
        this.subjectSelector = count;
      }
      returnSubjectValue() {
        return this.fetchSubject;
      }
      fetchSubjectList(): void {
        this.fetchSubject.emit(true);
      }
      
}