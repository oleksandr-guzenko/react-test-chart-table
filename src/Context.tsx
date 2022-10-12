import { createContext } from "react"

export type GlobalContent = {
    data: any
}

export const DataContext = createContext<GlobalContent>({
    data: []
})