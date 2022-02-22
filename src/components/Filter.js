import { useEffect, useCallback } from 'react';
import { HStack, Flex, Button, Text } from '@chakra-ui/react';

import FilterButton from './FilterButton';

const options = [
  {
    value: 0,
    label: 'ALL',
  },
  {
    value: 3,
    label: '三月',
  },
  {
    value: 4,
    label: '四月',
  },
  {
    value: 5,
    label: '五月',
  },
];

const Filter = props => {
  const { activities, activeMonth, setActiveMonth, setFiltered } = props;

  const handleFilter = useCallback(() => {
    const handlingFilter = () => {
      if (activeMonth === 0) {
        setFiltered(activities);
        return;
      }
      const filter = activities.filter(
        activity => activity.month === activeMonth
      );
      setFiltered(filter);
    };
    handlingFilter();
  }, [activeMonth, activities, setFiltered]);

  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

  return (
    <Flex bg="#EEF0EF" w="100%" justify="center">
      <HStack py="8px" spacing={{ base: 4, lg: 10 }}>
        {options.map(option => (
          <FilterButton
            key={option.value}
            value={option.value}
            label={option.label}
            activeMonth={activeMonth}
            setActiveMonth={setActiveMonth}
          />
        ))}
      </HStack>
    </Flex>
  );
};

export default Filter;
