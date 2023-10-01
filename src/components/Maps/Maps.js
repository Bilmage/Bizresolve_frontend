import React from 'react'

export default function Maps() {
    return (
        <>
        <div className='container'>
            <div style={{ overflow: "hidden", maxWidth: "100%", width: "100%", height: "100%" }}>
                <div
                    id="my-map-display"
                    style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                >
                    <iframe
                        style={{ height: "100%", width: "100%", border: 0 }}
                        frameBorder={0}
                        src="https://www.google.com/maps/embed/v1/place?q=Westlands,+Nairobi,+Kenya&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                </div>                
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "#my-map-display .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;"
                    }}
                />
            </div>
            </div>
        </>
    )
}
