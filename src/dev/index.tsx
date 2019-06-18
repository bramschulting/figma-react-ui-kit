import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from './index.scss';
import { Section, SectionBlock, SectionTitle, Input, ControlSizes, InputLabel, Textarea, Button, ButtonTypes, Checkbox, IconButton, Select, OptionMenu } from '../react'

class App extends React.Component {
    public render() {
        return (
            <>
                <Section>
                    <SectionTitle>Inputs</SectionTitle>
                    <SectionBlock>
                        <InputLabel>Some label</InputLabel>
                        <Input className={styles.input} inputSize={ControlSizes.M} type="text" placeholder="Enter your name" />
                        <Input className={styles.input} inlineLabel="X Pos" inputSize={ControlSizes.S} type="text" />
                        <Input cleanBorder className={styles.input} inlineLabel="X Pos" inputSize={ControlSizes.S} type="text" />
                        <Input cleanBorder className={styles.input} inlineLabel="X Pos" inputSize={ControlSizes.S} type="text" />
                    </SectionBlock>
                    <SectionBlock className={styles.checkboxes}>
                        <Checkbox
                            className={styles.checkbox}
                            checkboxSize={ControlSizes.M}
                            label="Check me"
                        />
                        <Checkbox
                            className={styles.checkbox}
                            checkboxSize={ControlSizes.S}
                            label="Check me"
                        />
                    </SectionBlock>
                    <SectionBlock className={styles.flex}>
                        <Select
                            maxHeight={100}
                            onOpen={() => console.log('open')}
                            onClose={() => console.log('close')}
                            className={styles.select}
                            selectSize={ControlSizes.M}
                            options={[
                                { label: 'Option 1', value: '1' },
                                { label: 'Option 2', value: '2' },
                                { label: 'Option 3', value: '3' },
                                { label: 'Option 4', value: '4' },
                                { label: 'Option 5', value: '5' },
                                { label: 'Option 6', value: '6' },
                            ]}
                        />
                        <Select
                            className={styles.select}
                            selectSize={ControlSizes.S}
                            options={[
                                { label: 'Option 1', value: '1' },
                                { label: 'Option 2', value: '2' },
                            ]}
                        />
                        <Select
                            cleanBorder
                            className={styles.select}
                            selectSize={ControlSizes.S}
                            options={[
                                { label: 'Option 1', value: '1' },
                                { label: 'Option 2', value: '2' },
                            ]}
                        />
                    </SectionBlock>
                    <SectionBlock>
                        <Textarea className={styles.textarea}></Textarea>
                    </SectionBlock>
                </Section>
                <Section>
                    <SectionTitle>Buttons</SectionTitle>
                    <SectionBlock>
                        <Button className={styles.button} buttonSize={ControlSizes.M}>Click me!</Button>
                        <Button className={styles.button} buttonSize={ControlSizes.S}>Click me!</Button>
                    </SectionBlock>
                    <SectionBlock>
                        <Button className={styles.button} buttonType={ButtonTypes.GHOST} buttonSize={ControlSizes.M}>Click me!</Button>
                        <Button className={styles.button} buttonType={ButtonTypes.GHOST} buttonSize={ControlSizes.S}>Click me!</Button>
                    </SectionBlock>
                    <SectionBlock className={styles.flex}>
                        <IconButton buttonSize={ControlSizes.M} className={styles.button}>X</IconButton>
                        <IconButton buttonSize={ControlSizes.S} className={styles.button}>X</IconButton>
                    </SectionBlock>
                    <SectionBlock>
                        <div style={{ width: '50px' }}>
                            <OptionMenu<string>
                                options={[
                                    {
                                        label: 'Click me',
                                        value: 'click-me',
                                        onClick: (v: string) => {
                                            alert(v);
                                        }
                                    }
                                ]}
                            />
                        </div>

                        <OptionMenu<string>
                            options={[
                                {
                                    label: 'Click me',
                                    value: 'click-me',
                                    onClick: (v: string) => {
                                        alert(v);
                                    }
                                }
                            ]}
                        />
                    </SectionBlock>
                </Section>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);