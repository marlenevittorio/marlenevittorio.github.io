import * as React from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useEffect, useState } from 'react';
const photos: any[] = [];

for(let i = 0; i <= 142; i++) {
    photos.push({
        src:`/resources/images/wedding-thumbnail/wedding${i}.jpg`,
        width: Math.random() * (6 - 3) + 3,
        height: Math.random() * (6 - 3) + 3
    })
}

export function Images() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [images, setImages] = useState(photos.slice(0, 15));
    const [pageNum, setPageNum] = useState(1);
    const [loadedAll, setLoadedAll] = useState(false);
    const TOTAL_PAGES = 20;

    const openLightbox = useCallback((_event, { index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const loadMorePhotos = debounce(() => {
        if (pageNum > TOTAL_PAGES) {
            setLoadedAll(true);
            return;
        }

        setImages(images.concat(photos.slice(images.length, images.length + 15)));
        setPageNum(pageNum + 1);
    }, 200);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        let scrollY =
            window.scrollY ||
            window.pageYOffset ||
            document.documentElement.scrollTop;
        if (window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
            loadMorePhotos();
        }
    };

    return (
        <div>
            <Gallery photos={images} onClick={openLightbox} direction={"column"}/>
            {!loadedAll && (
                <div className="loading-msg" id="msg-loading-more">
                    Loading
                </div>
            )}
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x =>
                                ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export const debounce = (func: { (): void; apply?: any; }, wait: number, immediate?: undefined) => {
    let timeout: number;
    return function() {
        const context = this,
            args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        // @ts-ignore
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};