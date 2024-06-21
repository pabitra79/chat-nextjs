import {
  CornerDownLeft,
  Dock,
  Megaphone,
  MessageCircleMore,
  MessageSquare,
  MessageSquarePlus,
  Mic,
  Paperclip,
  Scan,
  Settings,
  UsersRound
} from 'lucide-react'

import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { UserButton } from '@clerk/nextjs'

export default function Chat() {
  return (
    <div className='grid h-screen w-full pl-[53px]'>
      {/* Sidebar */}
      <aside className='inset-y fixed left-0 z-20 flex h-full flex-col border-r'>
        <nav className='grid gap-1 px-2 py-4'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='rounded-lg bg-muted'
                  aria-label='Playground'
                >
                  <MessageSquare className='size-5' />
                </Button>
              </TooltipTrigger>
              <TooltipContent side='right' sideOffset={5}>
                Chats
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='rounded-lg'
                  aria-label='Models'
                >
                  <UsersRound className='size-5' />
                </Button>
              </TooltipTrigger>
              <TooltipContent side='right' sideOffset={5}>
                Communities
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='rounded-lg'
                  aria-label='API'
                >
                  <Scan className='size-5' />
                </Button>
              </TooltipTrigger>
              <TooltipContent side='right' sideOffset={5}>
                Status
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='rounded-lg'
                  aria-label='Documentation'
                >
                  <MessageCircleMore className='size-5' />
                </Button>
              </TooltipTrigger>
              <TooltipContent side='right' sideOffset={5}>
                Channels
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='rounded-lg'
                  aria-label='Settings'
                >
                  <Dock className='size-5' />
                </Button>
              </TooltipTrigger>
              <TooltipContent side='right' sideOffset={5}>
                Tools
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='rounded-lg'
                  aria-label='Settings'
                >
                  <Megaphone className='size-5' />
                </Button>
              </TooltipTrigger>
              <TooltipContent side='right' sideOffset={5}>
                Advertise
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className='mt-auto grid gap-1 px-2 py-4'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='mt-auto rounded-lg'
                  aria-label='Help'
                >
                  <Settings className='size-5' />
                </Button>
              </TooltipTrigger>
              <TooltipContent side='right' sideOffset={5}>
                Settings
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className='flex items-center justify-center'>
            <UserButton />
          </div>

          {/* <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='mt-auto rounded-lg'
                  aria-label='Account'
                >
                  <SquareUser className='size-5' />
                </Button>
              </TooltipTrigger>
              <TooltipContent side='right' sideOffset={5}>
                Account
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> */}
        </nav>
      </aside>

      <main className='grid flex-1 overflow-auto md:grid-cols-2 lg:grid-cols-3'>
        {/* Conversations */}
        <div className='relative hidden flex-col items-start gap-8 p-4 md:flex'>
          <header className='w-full'>
            <div className='flex items-center justify-between'>
              <h1 className='text-2xl font-bold'>Chats</h1>
              <MessageSquarePlus className='size-6' />
            </div>
          </header>

          {/* list of contacts */}
          <ul className='grid w-full gap-8'>
            <li className='flex items-start gap-4'>
              <Avatar className='hidden h-9 w-9 sm:flex'>
                <AvatarImage src='/avatars/01.png' alt='Avatar' />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium leading-none'>
                  Olivia Martin
                </p>
                <p className='text-sm text-muted-foreground'>
                  olivia.martin@email.com
                </p>
              </div>
              <div className='ml-auto text-xs text-muted-foreground'>
                Yesterday
              </div>
            </li>

            <li className='flex items-center gap-4'>
              <Avatar className='hidden h-9 w-9 sm:flex'>
                <AvatarImage src='/avatars/02.png' alt='Avatar' />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium leading-none'>Jackson Lee</p>
                <p className='text-sm text-muted-foreground'>
                  jackson.lee@email.com
                </p>
              </div>
              <div className='ml-auto text-xs text-muted-foreground'>
                Yesterday
              </div>
            </li>

            <li className='flex items-center gap-4'>
              <Avatar className='hidden h-9 w-9 sm:flex'>
                <AvatarImage src='/avatars/03.png' alt='Avatar' />
                <AvatarFallback>IN</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium leading-none'>
                  Isabella Nguyen
                </p>
                <p className='text-sm text-muted-foreground'>
                  isabella.nguyen@email.com
                </p>
              </div>
              <div className='ml-auto text-xs text-muted-foreground'>
                Monday
              </div>
            </li>

            <li className='flex items-center gap-4'>
              <Avatar className='hidden h-9 w-9 sm:flex'>
                <AvatarImage src='/avatars/04.png' alt='Avatar' />
                <AvatarFallback>WK</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium leading-none'>William Kim</p>
                <p className='text-sm text-muted-foreground'>will@email.com</p>
              </div>
              <div className='ml-auto text-xs text-muted-foreground'>
                Saturday
              </div>
            </li>

            <li className='flex items-center gap-4'>
              <Avatar className='hidden h-9 w-9 sm:flex'>
                <AvatarImage src='/avatars/05.png' alt='Avatar' />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium leading-none'>Sofia Davis</p>
                <p className='text-sm text-muted-foreground'>
                  sofia.davis@email.com
                </p>
              </div>
              <div className='ml-auto text-xs text-muted-foreground'>
                Tuesday
              </div>
            </li>
          </ul>
        </div>

        {/* Messages */}
        <div className='relative flex h-full min-h-[50vh] flex-col bg-muted/50 p-4 lg:col-span-2'>
          <div className='flex-1'></div>
          <form
            className='relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring'
            x-chunk='dashboard-03-chunk-1'
          >
            <Label htmlFor='message' className='sr-only'>
              Message
            </Label>
            <Textarea
              id='message'
              placeholder='Type your message here...'
              className='min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0'
            />
            <div className='flex items-center p-3 pt-0'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant='ghost' size='icon'>
                      <Paperclip className='size-4' />
                      <span className='sr-only'>Attach file</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side='top'>Attach File</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant='ghost' size='icon'>
                      <Mic className='size-4' />
                      <span className='sr-only'>Use Microphone</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side='top'>Use Microphone</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button type='submit' size='sm' className='ml-auto gap-1.5'>
                Send Message
                <CornerDownLeft className='size-3.5' />
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
