import Link from 'next/link'
import React from 'react'
import { Button } from 'ui'
import { useMobileViewport } from '../../../hooks/useMobileViewport'
import { UserData } from '../Ticket/hooks/use-conf-data'
import { TicketBrickWallSlider } from './TicketBrickWallSlider'

type user = UserData

interface Props {
  users: user[]
}

export default function TicketBrickWall({ users }: Props) {
  const isMobile = useMobileViewport(768)
  return (
    <div className="relative pb-20 pt-28 md:pt-40">
      <div className="mx-auto bg-[#1C1C1C]">
        <div className="max-w-[38rem] mb-8 mx-auto">
          <h2 className="text-center radial-gradient-text-scale-500">
            Explore the unique tickets generated by our community
          </h2>
        </div>
        <div
          className="grid py-4 relative
            before:content-[' '] before:absolute before:inset-0 before:right-auto before:w-1/4 before:bg-gradient-to-r before:from-[#1C1C1C] before:to-[#1C1C1C00] before:z-10 before:pointer-events-none
            after:content-[' '] after:absolute after:inset-0 after:left-auto after:w-1/4 after:bg-gradient-to-l after:from-[#1C1C1C] after:to-[#1C1C1C00] after:z-10 after:pointer-events-none
          "
        >
          <TicketBrickWallSlider users={users.slice(0, isMobile ? 5 : 7)} />
          <TicketBrickWallSlider
            users={users.slice(isMobile ? 5 : 7, isMobile ? 11 : 14)}
            reverse
          />
          {isMobile && <TicketBrickWallSlider users={users.slice(11, 17)} speed={16000} />}
        </div>
        <div className="flex justify-center w-full mx-auto mt-2 lg:mt-4">
          <Link href="/launch-week/tickets">
            <a>
              <Button type="outline" size="medium">
                View all tickets
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
