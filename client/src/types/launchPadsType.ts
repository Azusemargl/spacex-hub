export type LaunchPadsType = {
   attempted_launches: number
   details: string
   id: number
   location: { name: string, region: string, latitude: number }
   name: string
   site_id: string
   site_name_long: string
   status: string
   successful_launches: number
   vehicles_launched: Array<string>
   wikipedia: string

}