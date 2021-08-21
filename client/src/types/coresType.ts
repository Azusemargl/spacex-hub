export type CoresType = {
   asds_attempts: number
   asds_landings: number
   core_serial: string
   details: string
   missions: [{ name: string, flight: number }]
   original_launch: string
   original_launch_unix: number
   reuse_count: number
   rtls_attempts: number
   rtls_landings: number
   status: string
   water_landing: boolean
}