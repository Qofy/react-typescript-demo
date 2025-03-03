export type ProfileProps = {
  name?: string
}
export const Profile = ({name} : ProfileProps) => {
  return <div>Private {name} component</div>
}