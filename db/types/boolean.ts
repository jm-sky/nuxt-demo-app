import { customType } from 'drizzle-orm/sqlite-core'

export const boolean = <TData = boolean>(name: string) =>
  customType<{ data: TData, driverData: number }>(
    {
      dataType() {
        return 'boolean'
      },
      toDriver(value: TData): number {
        return value ? 1 : 0
      },
    },
  )(name)
