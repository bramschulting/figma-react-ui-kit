import * as React from 'react';
import * as styles from 'src/scss/components/Select.scss';
import classNames from 'classnames';
import { ISelectProps, ISelectOption } from 'typings/Select';
import { ControlSizes } from 'constants';

interface IState {
    isOpen: boolean;
    value?: string;
}

export class Select extends React.Component<ISelectProps, IState> {
    private listRef = React.createRef<HTMLUListElement>();

    public static defaultProps = {
        selectSize: ControlSizes.M,
    }

    public static getDerivedStateFromProps(nextProps: ISelectProps, curState: IState) {
        const { value } = nextProps;
        if (value !== undefined) {
            return {
                value,
            }
        }
        return null;
    }

    constructor(props: ISelectProps) {
        super(props);

        const { value, defaultValue } = this.props;
        this.state = {
            isOpen: false,
            value: value === undefined ? defaultValue : value,
        };
    }

    private get selectedOption(): ISelectOption | undefined {
        const { options, defaultValue } = this.props;
        const { value } = this.state;
        const currentValue = value || defaultValue;
        return options.find(o => o.value === currentValue);
    }

    private handleClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (
            !this.listRef.current
            || !this.listRef.current.contains(event.target as any)
        ) {
            this.setState({
                isOpen: true,
            });
        }
    }

    private handleOptionClick = (opt: ISelectOption) => {
        const { value, onChange } = this.props;
        const nextState: IState = {
            isOpen: false,
        };
        if (value === undefined) nextState.value = opt.value;
        this.setState(nextState);
        if (onChange) onChange(opt);
    }

    private handleWindowClick = (event: Event) => {
        if (this.listRef.current && !this.listRef.current.contains(event.target as any)) {
            this.setState({
                isOpen: false,
            });
        }
    }

    public componentDidMount() {
        window.addEventListener('click', this.handleWindowClick);
    }

    public componentWillUnmount() {
        window.removeEventListener('click', this.handleWindowClick);
    }

    public render() {
        const {
            children,
            className,
            selectSize,
            options,
            placeholder,
            onChange,
            ...rest
        } = this.props;
        const { isOpen } = this.state;

        return (
            <div
                {...rest}
                onClick={this.handleClick}
                className={classNames({
                    [styles.select]: true,
                    [styles[selectSize]]: true,
                    [styles.focus]: isOpen,
                    [className]: !!className,
                })}
            >
                {!this.selectedOption ? (
                    <span className={styles.placeholder}>{placeholder}</span>
                ) : (
                    <span className={styles.value}>
                        <span className={styles.icon}>
                            {!!this.selectedOption.icon && (
                                this.selectedOption.icon
                            )}
                        </span>
                        <span className={styles.label}>{this.selectedOption.label}</span>
                    </span>
                )}

                <svg
                    className={styles.arrow}
                    width="8"
                    height="7"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M3.646 5.354l-3-3 .708-.708L4 4.293l2.646-2.647.708.708-3 3L4 5.707l-.354-.353z" fillRule="evenodd" />
                </svg>

                {isOpen && (
                    <ul ref={this.listRef} className={styles.optionsList}>
                        {options.map(o => (
                            <li key={o.value} className={styles.option} onClick={() => this.handleOptionClick(o)}>
                                {this.selectedOption && this.selectedOption.value === o.value && (
                                    <svg
                                        className={styles.checkmark}
                                        width="16"
                                        height="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.207 5.207L7 11.414 3.292 7.707l1.415-1.414L7 8.586l4.793-4.793 1.414 1.414z" />
                                    </svg>
                                )}
                                <span className={styles.label}>{o.label}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}