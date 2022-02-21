import { Button } from '@chakra-ui/react';

const FilterButton = props => {
  const { activeMonth, setActiveMonth, value } = props;
  const isActive = value === activeMonth ? 'active' : '';

  return (
    <Button
      color={isActive ? 'grey.800' : 'grey.600'}
      bg={isActive ? 'sun' : 'grey.300'}
      onClick={() => setActiveMonth(value)}
    >
      {props.label}
    </Button>
  );
};

export default FilterButton;
