"use client"

import { useServerInsertedHTML } from "next/navigation"
import { useState } from "react"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import { GlobalStyle } from "./GlobalStyle"

export const Registry = ({children} : {children : React.ReactNode})=>{
    const [sheet] = useState(()=>new ServerStyleSheet())

    useServerInsertedHTML(()=>{
        const styles = sheet.getStyleElement()
        sheet.instance.clearTag()
        return<>{styles}</>
    })

    if(typeof document !== "undefined"){
        return<>{children}</>
    }

    return(
        <StyleSheetManager sheet={sheet.instance}>
            <GlobalStyle/>
            {children}
        </StyleSheetManager>
    )
}