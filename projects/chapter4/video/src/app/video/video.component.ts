import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
})
export class VideoComponent implements OnDestroy, OnInit {
  #youtubeIframeScript: HTMLScriptElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.#youtubeIframeScript = this.document.createElement('script');
    this.#youtubeIframeScript.src = 'https://www.youtube.com/iframe_api';
    this.#youtubeIframeScript.async = true;
  }

  ngOnInit(): void {
    this.document.body.appendChild(this.#youtubeIframeScript);
  }

  ngOnDestroy(): void {
    this.document.body.removeChild(this.#youtubeIframeScript);
  }
}
