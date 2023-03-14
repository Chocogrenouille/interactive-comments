import Button from '../button/button'
import LikePost from '../like-post/like-post'
import Textarea from '../texarea/textarea'
import UpdatePost from '../update-post/update-post'
import UserInformation from '../user-information/user-information'

export default function Post({ type }: { type: 'comment' | 'reply' }) {
  return (
    <>
      <LikePost />
      <UserInformation />
      <UpdatePost />
      <Textarea />
      <Button type="send" />
    </>
  )
}
