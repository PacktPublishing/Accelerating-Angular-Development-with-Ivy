import { FactoryProvider, Renderer2, RendererFactory2 } from '@angular/core';

export const rendererProvider: FactoryProvider = {
  deps: [RendererFactory2],
  provide: Renderer2,
  useFactory: (rendererFactory: RendererFactory2): Renderer2 =>
    rendererFactory.createRenderer(null, null),
};
