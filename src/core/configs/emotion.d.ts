import '@emotion/react';
import { designToken } from './theme';

declare module '@emotion/react' {
    interface Theme extends ReturnType<typeof designToken> {}
}
