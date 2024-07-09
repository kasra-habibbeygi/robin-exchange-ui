import { forwardRef } from 'react';
import { LinkProps } from 'react-router-dom';
import { Link as ReactLink } from 'react-router-dom';

interface LinkPropType extends Omit<LinkProps, 'to'> {
    href?: string;
    to?: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkPropType>((props, ref) => {
    const { href, children, to, ...linkProps } = props;

    const hrefPath = href && href.startsWith('/') ? `${window.location.origin}/fa${href}` : href;
    const toPath = to && to.startsWith('/') ? `${window.location.origin}/fa${to}` : to;
    const Element = href ? 'a' : ReactLink;

    return (
        <Element ref={ref} to={toPath!} href={hrefPath} {...linkProps}>
            {children}
        </Element>
    );
});

export default Link;
