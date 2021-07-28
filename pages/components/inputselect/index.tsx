import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import CustomSelect from '../../../components/kit/components/form/select/CustomSelect';
import Select from '../../../components/kit/components/form/select/Select';
import Select2 from '../../../components/kit/components/form/select/Select2';
import SelectWithLabel from '../../../components/kit/components/form/select/SelectWithLabel';

const InputTextPage: FC = () => {
    return (
        <AppLayout
            title="Select input free Tailwind components"
            desc="Select input and more components for tailwind css"
        >
            <SectionHeader title="Selects" />
            <ComponentLayout title="simple" element={<Select />} component={Select} />
            <ComponentLayout title="simple2" element={<Select2 />} component={Select2} />
            <ComponentLayout title="with label" element={<SelectWithLabel />} component={SelectWithLabel} />
            <ComponentLayout
                title="custom"
                jsLink="https://github.com/pollmix/tail-kit"
                element={<CustomSelect forceOpen={true} hideImage={true} />}
                component={CustomSelect}
            />
            <ComponentLayout
                jsLink="https://github.com/pollmix/tail-kit"
                title="custom with image"
                element={<CustomSelect forceOpen={true} />}
                component={CustomSelect}
            />
        </AppLayout>
    );
};

export default InputTextPage;
