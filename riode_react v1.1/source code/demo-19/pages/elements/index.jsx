import React from 'react';

import ElementsList from '~/components/partials/elements/elements-list';

function ElementIndex () {
    return (
        <ElementsList adClass="bg-white" />
    )
}

export default React.memo( ElementIndex );