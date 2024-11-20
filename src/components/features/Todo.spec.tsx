import { mockTodos } from '../../mocks/data/todos';
import Todo from './Todo';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('TodoForm', () => {
  test('투두 완료 및 삭제 테스트', async () => {
    const user = userEvent.setup();
    render(<Todo todo={mockTodos[0]} onDelete={() => { }} onUpdate={() => { }} />);

    // 완료 체크박스 테스트
    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByText('할 일 1')).toHaveStyle({ textDecoration: 'line-through' });

    // 삭제 버튼 테스트
    await user.click(screen.getByRole('button', { name: '삭제' }));
    expect(screen.queryByText('할 일 1')).not.toBeInTheDocument();
  })
});