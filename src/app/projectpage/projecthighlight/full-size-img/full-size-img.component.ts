import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectmediaModel} from '../../projectmedia.model';

@Component({
  selector: 'app-full-size-img',
  templateUrl: './full-size-img.component.html',
  styleUrls: ['./full-size-img.component.css']
})
export class FullSizeImgComponent implements OnInit {
  @Input("img") imgToMakeBig: ProjectmediaModel;
  @Output("onClose") onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseImg() {
    this.onClose.emit(true);
  }

}
