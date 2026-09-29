import React from 'react'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { markTodoCompleted, deleteTodo as deleteTodoAction } from '@/actions/todo-action'

export const TodoItem = ({ todo }) => {
    const queryClient = useQueryClient();
    const { mutate: toggleTodo } = useMutation({
        mutationFn: ({ id, isCompleted }) => markTodoCompleted({ id, isCompleted }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] })
            toast.success("Todo updated successfully");
        },
        onError: (error) => {
            console.log(error);
            toast.error("Failed to update todo");
        }
    })

    const { mutate: deleteTodo, isPending: isDeleting } = useMutation({
        mutationFn: ({ id }) => deleteTodoAction({ id }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] })
            toast.success("Todo deleted successfully");
        },
        onError: (error) => {
            console.log(error);
            toast.error("Failed to delete todo");
        }
    })

    return (
        <div className='flex items-center p-4 bg-card border rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <div className='flex items-center gap-3 w-full'>
                <Checkbox
                    checked={todo.isCompleted}
                    onCheckedChange={(checked) => toggleTodo({ id: todo._id, isCompleted: checked })}
                    id={`todo-${todo._id}`}
                />

                <label
                    htmlFor={`todo-${todo._id}`}
                    className={cn(
                        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
                        todo.isCompleted && "line-through text-muted-foreground"
                    )}
                >
                    {todo.title}
                </label>
                <Button
                    variant='destructive'
                    size='icon'
                    onClick={() => deleteTodo({
                        id: todo._id
                    })}
                    disabled={isDeleting}
                >
                    <Trash
                        size={18}
                    />
                </Button>

            </div>
        </div>
    )
}
