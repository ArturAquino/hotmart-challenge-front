import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import { withStyles } from '@material-ui/core/styles';
import { colorLightBlue1, colorLightBlue2, slateGray } from '../../assets/styles/colors'

const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BreadcrumbTest ({ arrayPath }) {

    return (
        <StyledBreacrumb aria-label='breadcrumb'>
            {
                arrayPath.map((elemPath, index) => {
                    return (
                        <StyledCrumb key={index} color = {(arrayPath.length - 1) === index ?
                            'textPrimary' : 'inherit'} href = "/" onClick = { handleClick }
                            aria-current = {(arrayPath.length - 1) === index ? 'page' : '' }>
                            {elemPath}
                        </StyledCrumb>
                    )
                })
            }
        </StyledBreacrumb>
    )
}

const StyledBreacrumb = withStyles({
    root: {
        width: '100%',
        fontSize: '16px',
        padding: '20px 0',
        backgroundColor: colorLightBlue1,
        position: 'relative',
        top: 0
    },
    ol: {
        paddingLeft: '3%'
    },
    li: {
        color: colorLightBlue2
    },
    separator: {
        color: slateGray
    },
})(Breadcrumbs)

const StyledCrumb = withStyles({
    underlineHover: {
        textDecoration: 'none !important'
    }
})(Link);
