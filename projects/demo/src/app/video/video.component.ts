import { Component, Input, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'workspace-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.scss'],
})
export class VideoComponent implements OnDestroy, OnInit {
  private youtubeIframeScript: HTMLScriptElement;

  @Input()
  public title!: string;

  @Input()
  public name!: string;

  @Input()
  public videoId!: string;

  @Input()
  public description!: string;

  @Input()
  public snippet!: string;

  get youtubeLink(): string {
    return this.title + ' : https://www.youtube.com/watch?v=' + this.videoId;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.youtubeIframeScript = this.document.createElement('script');
    this.youtubeIframeScript.src = 'https://www.youtube.com/iframe_api';
    this.youtubeIframeScript.async = true;
  }

  ngOnInit(): void {
    this.document.body.appendChild(this.youtubeIframeScript);
  }

  ngOnDestroy(): void {
    this.document.body.removeChild(this.youtubeIframeScript);
  }
}
