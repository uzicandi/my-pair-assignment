import styled from '@emotion/styled';

export type TabType = 'ALL' | 'TODO' | 'DONE';
interface TabGroupProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  tab: TabType;
}

export default function TabGroup({ onClick, tab }: TabGroupProps) {
  return (
    <TabItemWrapper>
      <TabItem onClick={onClick} selected={tab === 'ALL'} value={'ALL'}>All</TabItem>
      <TabItem onClick={onClick} selected={tab === 'TODO'} value={'TODO'}>To Do</TabItem>
      <TabItem onClick={onClick} selected={tab === 'DONE'} value={'DONE'}>Done</TabItem>
    </TabItemWrapper>
  )
}

const TabItem = styled.button<{ selected: boolean }>`
  height: 40px;
  border-radius: 12px;
  padding: 8px 32px;
  background-color: ${({ selected }) => selected ? '#EBF4FF' : '#fff'};
  color: ${({ selected }) => selected ? '#2182F3' : '#454545'};
  align-items: center;
  display: flex;
`;

const TabItemWrapper = styled.div`
  display: flex;
  justify-content: center;
`;