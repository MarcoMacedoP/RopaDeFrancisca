type IconProps = {
  value: string;
  onClick?: any;
};

export const Icon: React.FC<IconProps> = props => {
  return props.onClick ? (
    <i className="material-icons" onClick={props.onClick}>
      {props.value}
    </i>
  ) : (
    <i className="material-icons">{props.value}</i>
  );
};
