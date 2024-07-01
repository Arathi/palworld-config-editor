import { CSSProperties, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
  flex?: CSSProperties['flex'];
}

const Flex: React.FC<Props> = ({
  direction,
  wrap,
  justify,
  align,
  gap,
  flex,
  style,
  children,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,
        gap,
        flex,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
