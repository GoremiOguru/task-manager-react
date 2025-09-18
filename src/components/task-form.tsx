"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
    id: z.string(),
  Title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string(),
  createdAt: z.string(),
  status: z.enum(['pending', 'in-progress', 'done'])
})
export type DataType = z.infer<typeof FormSchema>;
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { IconPlus } from "@tabler/icons-react"
import { useId, useState } from "react"
interface TaskFormProps {
    setData: (data: DataType) => void;
}
export function TaskForm({setData}: TaskFormProps) {
    const [open, setOpen] = useState(false)
    const form = useForm<DataType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        id: useId(),
      Title: "",
      description: "",
      status: "pending",
      createdAt: new Date().toString()
    },
  })

  function onSubmit(data: DataType) {
    setData(data);
    setOpen(false);
    form.reset()
    toast("Task added succesfully")
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button>
            <IconPlus/>
            <span>Create Task</span>
          </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create a new task</AlertDialogTitle>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
       <FormField
          control={form.control}
          name="Title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Your task title" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="createdAt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time & Date</FormLabel>
              <FormControl>
                <Input placeholder="created at" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button type= "submit">Continue</Button>
        </AlertDialogFooter>
       
        
      </form>
    </Form>
        </AlertDialogHeader>
        
          
      </AlertDialogContent>
    </AlertDialog>
  )
  



  



}
