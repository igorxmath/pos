import { Trash } from '#/icons'

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
} from '#/ui/alertDialog'
import { Button } from '#/ui/button'
import {
  FieldSet,
  FieldSetContent,
  FieldSetDescription,
  FieldSetFooter,
  FieldSetFooterActions,
  FieldSetFooterStatus,
  FieldSetHeader,
  FieldSetTitle,
} from '#/ui/fieldset'
import { Input } from '#/ui/input'
import { Label } from '#/ui/label'
import { Switch } from '#/ui/switch'

export default async function Page() {
  return (
    <>
      <ChangeNameFieldSet />
      <NotificationsFieldSet />
      <DeleteAccountFieldSet />
    </>
  )
}

function ChangeNameFieldSet() {
  return (
    <FieldSet>
      <FieldSetHeader>
        <FieldSetTitle>Display Name</FieldSetTitle>
        <FieldSetDescription>
          Please enter your full name, or a display name you are comfortable with.
        </FieldSetDescription>
      </FieldSetHeader>
      <FieldSetContent>
        <div className='sm:w-1/4'>
          <Input placeholder='Acme' />
        </div>
      </FieldSetContent>
      <FieldSetFooter>
        <FieldSetFooterStatus>Please use 32 characters at maximum.</FieldSetFooterStatus>
        <FieldSetFooterActions>
          <Button size={'sm'}>Save</Button>
        </FieldSetFooterActions>
      </FieldSetFooter>
    </FieldSet>
  )
}

function NotificationsFieldSet() {
  return (
    <FieldSet>
      <FieldSetHeader>
        <FieldSetTitle>Notifications</FieldSetTitle>
        <FieldSetDescription>Manage your notification preferences.</FieldSetDescription>
      </FieldSetHeader>
      <FieldSetContent>
        <div className='flex items-center space-x-2'>
          <Switch id='notifications' />
          <Label htmlFor='notifications'>Notifications</Label>
        </div>
      </FieldSetContent>
      <FieldSetFooter>
        <FieldSetFooterActions>
          <Button size={'sm'}>Save</Button>
        </FieldSetFooterActions>
      </FieldSetFooter>
    </FieldSet>
  )
}

function DeleteAccountFieldSet() {
  return (
    <FieldSet className='border-red-600'>
      <FieldSetHeader>
        <FieldSetTitle>Account Deletion</FieldSetTitle>
        <FieldSetDescription>
          Permanently delete your account and all associated data.
        </FieldSetDescription>
      </FieldSetHeader>
      <FieldSetContent>Enter your password to confirm the account deletion.</FieldSetContent>
      <FieldSetFooter>
        <AlertDialog>
          <FieldSetFooterActions>
            <AlertDialogTrigger asChild>
              <Button
                size={'sm'}
                variant='destructive'
              >
                Delete Account
              </Button>
            </AlertDialogTrigger>
          </FieldSetFooterActions>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>
                <Trash className='mr-2 h-4 w-4' />

                <span>Delete</span>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </FieldSetFooter>
    </FieldSet>
  )
}
