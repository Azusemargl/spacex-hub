export type LaunchType = {
   mission_name: string
   flight_number: number
   links: {
      mission_patch_small: string
      article_link: string
      video_link: string
      wikipedia: string
      flickr_images: Array<string>
   }
   details: string
   launch_year: string
   rocket: {
      rocket_name: string
      rocket_type: string
   }
   launch_date_local: string
   is_tentative: boolean
   ships: Array<string>
}