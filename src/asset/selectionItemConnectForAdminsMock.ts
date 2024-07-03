export type SearchSelectionItemConnectForAdminsResultMockType = {
    selectionItemConnectForAdmins: {
        _id: string;
        /** @description 스토어 상품 ID */
        storeItemId: string;
        /** @description 셀렉션 프레임 ID */
        selectionFrameId: string;
        /** @description 셀렉션 프레임 정보 */
        selectionFrame: {
            _id: string;
            selectionFrameDataInfo:{
                /** 대분류 셀렉션 프레임 데이터 아이디 */
                largeDataInfo: {
                    id: string;
                    title: string,
                    pickTitle: string,
                },
                mediumDataInfo: {
                    /** 중분류 셀렉션 프레임 데이터 아이디 */
                    id: string;
                    title: string;
                },
                smallDataInfo: {
                    /** 중분류 셀렉션 프레임 데이터 아이디 */
                    id: string;
                    title: string;
                },
                smallData2Info: {
                    /** 중분류 셀렉션 프레임 데이터 아이디 */
                    id: string;
                    title: string;
                },
                smallData3Info: {
                    /** 중분류 셀렉션 프레임 데이터 아이디 */
                    id: string;
                    title: string;
                },
            }
            /** 해당 셀렉션에 등록되어져 있는 상품 갯수 */
            regItemNums: number,
            /** 저장일 */
            regDate: Date,
        };
        /** @description 픽 한 상품인가 */
        isPick: boolean;
        /** @description 판매처 */
        salesLocation?: string;
        /** @description 정가 */
        regularPrice?: number;
        /** @description 마지막 수정일 */
        lastEditDate: Date;
        /** @description 등록일 */
        regDate: Date;
        /** @description 상품명 */
        itemName: string;
        /** @description 스토어 타이틀 */
        storeTitle: string;
        /** @description 나라 */
        nation: string;
        /** @description 판매중 여부 */
        isSelling: boolean;
        /** @description 배송비 */
        shippingFee?: number;
        /** @description 구간 배송비 - 첫번째 구간 금액 */
        sectionShippingFee?: number;
    }[];
    totalCount: number;
}

const selectionItemConnectForAdminsMock: SearchSelectionItemConnectForAdminsResultMockType = {
    selectionItemConnectForAdmins: [
        {
            _id: '_id_1',
            /** @description 스토어 상품 ID */
            storeItemId: 'storeItemId_1',
            /** @description 셀렉션 프레임 ID */
            selectionFrameId: 'selectionFrameId_1',
            /** @description 셀렉션 프레임 정보 */
            selectionFrame: {
                _id: '_id_1',
                /** 셀렉션 프레임 데이터 아이디 정보 */
                selectionFrameDataInfo: {
                    /** 대분류 셀렉션 프레임 데이터 아이디 */
                    largeDataInfo: {
                        id: 'largeDateId_1',
                        title: '라지 데이터 타이틀',
                        pickTitle: '픽 타이틀',
                    },
                    mediumDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'mediumDataId_1',
                        title: '미디엄 데이터 타이틀',
                    },
                    smallDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallDataId_1',
                        title: '스몰1 데이터 타이틀',
                    },
                    smallData2Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData2Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                    smallData3Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData3Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                },
                /** 해당 셀렉션에 등록되어져 있는 상품 갯수 */
                regItemNums: 20,
                /** 저장일 */
                regDate: new Date(),
            },
            /** @description 픽 한 상품인가 */
            isPick: true,
            /** @description 판매처 */
            salesLocation: '미쿡',
            /** @description 정가 */
            regularPrice: 200000,
            /** @description 마지막 수정일 */
            lastEditDate: new Date(),
            /** @description 등록일 */
            regDate: new Date(),
            /** @description 상품명 */
            itemName: '미쿡과자',
            /** @description 스토어 타이틀 */
            storeTitle: '행복나라',
            /** @description 나라 */
            nation: 'usa',
            /** @description 판매중 여부 ++++++++++++++++++++*/
            isSelling: true,
            /** @description 배송비 */
            shippingFee: 10000,
            /** @description 구간 배송비 - 첫번째 구간 금액 */
            sectionShippingFee: 10000,
        },
        {
            _id: '_id_2',
            /** @description 스토어 상품 ID */
            storeItemId: 'storeItemId_2',
            /** @description 셀렉션 프레임 ID */
            selectionFrameId: 'selectionFrameId_2',
            /** @description 셀렉션 프레임 정보 */
            selectionFrame: {
                _id: '_id_2',
                /** 셀렉션 프레임 데이터 아이디 정보 */
                selectionFrameDataInfo: {
                    /** 대분류 셀렉션 프레임 데이터 아이디 */
                    largeDataInfo: {
                        id: 'largeDateId_1',
                        title: '라지 데이터 타이틀',
                        pickTitle: '픽 타이틀',
                    },
                    mediumDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'mediumDataId_1',
                        title: '미디엄 데이터 타이틀',
                    },
                    smallDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallDataId_1',
                        title: '스몰1 데이터 타이틀',
                    },
                    smallData2Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData2Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                    smallData3Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData3Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                },
                /** 해당 셀렉션에 등록되어져 있는 상품 갯수 */
                regItemNums: 20,
                /** 저장일 */
                regDate: new Date(),
            },
            /** @description 픽 한 상품인가 */
            isPick: true,
            /** @description 판매처 */
            salesLocation: '미쿡2',
            /** @description 정가 */
            regularPrice: 200002,
            /** @description 마지막 수정일 */
            lastEditDate: new Date(),
            /** @description 등록일 */
            regDate: new Date(),
            /** @description 상품명 */
            itemName: '미쿡과자2',
            /** @description 스토어 타이틀 */
            storeTitle: '행복나라2',
            /** @description 나라 */
            nation: 'usa2',
            /** @description 판매중 여부 */
            isSelling: true,
            /** @description 배송비 */
            shippingFee: 10002,
            /** @description 구간 배송비 - 첫번째 구간 금액 */
            sectionShippingFee: 10002,
        },
        {
            _id: '_id_3',
            /** @description 스토어 상품 ID */
            storeItemId: 'storeItemId_3',
            /** @description 셀렉션 프레임 ID */
            selectionFrameId: 'selectionFrameId_3',
            /** @description 셀렉션 프레임 정보 */
            selectionFrame: {
                _id: '_id_3',
                /** 셀렉션 프레임 데이터 아이디 정보 */
                selectionFrameDataInfo: {
                    /** 대분류 셀렉션 프레임 데이터 아이디 */
                    largeDataInfo: {
                        id: 'largeDateId_1',
                        title: '라지 데이터 타이틀',
                        pickTitle: '픽 타이틀',
                    },
                    mediumDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'mediumDataId_1',
                        title: '미디엄 데이터 타이틀',
                    },
                    smallDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallDataId_1',
                        title: '스몰1 데이터 타이틀',
                    },
                    smallData2Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData2Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                    smallData3Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData3Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                },
                /** 해당 셀렉션에 등록되어져 있는 상품 갯수 */
                regItemNums: 20,
                /** 저장일 */
                regDate: new Date(),
            },
            /** @description 픽 한 상품인가 */
            isPick: true,
            /** @description 판매처 */
            salesLocation: '미쿡3',
            /** @description 정가 */
            regularPrice: 200003,
            /** @description 마지막 수정일 */
            lastEditDate: new Date(),
            /** @description 등록일 */
            regDate: new Date(),
            /** @description 상품명 */
            itemName: '미쿡과자3',
            /** @description 스토어 타이틀 */
            storeTitle: '행복나라3',
            /** @description 나라 */
            nation: 'usa3',
            /** @description 판매중 여부 */
            isSelling: true,
            /** @description 배송비 */
            shippingFee: 10003,
            /** @description 구간 배송비 - 첫번째 구간 금액 */
            sectionShippingFee: 10003,
        },
        {
            _id: '_id_4',
            /** @description 스토어 상품 ID */
            storeItemId: 'storeItemId_4',
            /** @description 셀렉션 프레임 ID */
            selectionFrameId: 'selectionFrameId_4',
            /** @description 셀렉션 프레임 정보 */
            selectionFrame: {
                _id: '_id_4',
                /** 셀렉션 프레임 데이터 아이디 정보 */
                selectionFrameDataInfo: {
                    /** 대분류 셀렉션 프레임 데이터 아이디 */
                    largeDataInfo: {
                        id: 'largeDateId_1',
                        title: '라지 데이터 타이틀',
                        pickTitle: '픽 타이틀',
                    },
                    mediumDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'mediumDataId_1',
                        title: '미디엄 데이터 타이틀',
                    },
                    smallDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallDataId_1',
                        title: '스몰1 데이터 타이틀',
                    },
                    smallData2Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData2Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                    smallData3Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData3Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                },
                /** 해당 셀렉션에 등록되어져 있는 상품 갯수 */
                regItemNums: 20,
                /** 저장일 */
                regDate: new Date(),
            },
            /** @description 픽 한 상품인가 */
            isPick: true,
            /** @description 판매처 */
            salesLocation: '미쿡4',
            /** @description 정가 */
            regularPrice: 200004,
            /** @description 마지막 수정일 */
            lastEditDate: new Date(),
            /** @description 등록일 */
            regDate: new Date(),
            /** @description 상품명 */
            itemName: '미쿡과자4',
            /** @description 스토어 타이틀 */
            storeTitle: '행복나라4',
            /** @description 나라 */
            nation: 'usa4',
            /** @description 판매중 여부 */
            isSelling: true,
            /** @description 배송비 */
            shippingFee: 10004,
            /** @description 구간 배송비 - 첫번째 구간 금액 */
            sectionShippingFee: 10004,
        },
        {
            _id: '_id_5',
            /** @description 스토어 상품 ID */
            storeItemId: 'storeItemId_5',
            /** @description 셀렉션 프레임 ID */
            selectionFrameId: 'selectionFrameId_5',
            /** @description 셀렉션 프레임 정보 */
            selectionFrame: {
                _id: '_id_5',
                /** 셀렉션 프레임 데이터 아이디 정보 */
                selectionFrameDataInfo: {
                    /** 대분류 셀렉션 프레임 데이터 아이디 */
                    largeDataInfo: {
                        id: 'largeDateId_1',
                        title: '라지 데이터 타이틀',
                        pickTitle: '픽 타이틀',
                    },
                    mediumDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'mediumDataId_1',
                        title: '미디엄 데이터 타이틀',
                    },
                    smallDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallDataId_1',
                        title: '스몰1 데이터 타이틀',
                    },
                    smallData2Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData2Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                    smallData3Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData3Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                },
                /** 해당 셀렉션에 등록되어져 있는 상품 갯수 */
                regItemNums: 20,
                /** 저장일 */
                regDate: new Date(),
            },
            /** @description 픽 한 상품인가 */
            isPick: true,
            /** @description 판매처 */
            salesLocation: '미쿡5',
            /** @description 정가 */
            regularPrice: 200005,
            /** @description 마지막 수정일 */
            lastEditDate: new Date(),
            /** @description 등록일 */
            regDate: new Date(),
            /** @description 상품명 */
            itemName: '미쿡과자5',
            /** @description 스토어 타이틀 */
            storeTitle: '행복나라5',
            /** @description 나라 */
            nation: 'usa5',
            /** @description 판매중 여부 */
            isSelling: true,
            /** @description 배송비 */
            shippingFee: 10005,
            /** @description 구간 배송비 - 첫번째 구간 금액 */
            sectionShippingFee: 10005,
        },
        {
            _id: '_id_6',
            /** @description 스토어 상품 ID */
            storeItemId: 'storeItemId_6',
            /** @description 셀렉션 프레임 ID */
            selectionFrameId: 'selectionFrameId_6',
            /** @description 셀렉션 프레임 정보 */
            selectionFrame: {
                _id: '_id_6',
                selectionFrameDataInfo: {
                    /** 대분류 셀렉션 프레임 데이터 아이디 */
                    largeDataInfo: {
                        id: 'largeDateId_1',
                        title: '라지 데이터 타이틀',
                        pickTitle: '픽 타이틀',
                    },
                    mediumDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'mediumDataId_1',
                        title: '미디엄 데이터 타이틀',
                    },
                    smallDataInfo: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallDataId_1',
                        title: '스몰1 데이터 타이틀',
                    },
                    smallData2Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData2Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                    smallData3Info: {
                        /** 중분류 셀렉션 프레임 데이터 아이디 */
                        id: 'smallData3Id_1',
                        title: '스몰2 데이터 타이틀',
                    },
                },
                /** 해당 셀렉션에 등록되어져 있는 상품 갯수 */
                regItemNums: 20,
                /** 저장일 */
                regDate: new Date(),
            },
            /** @description 픽 한 상품인가 */
            isPick: true,
            /** @description 판매처 */
            salesLocation: '미쿡6',
            /** @description 정가 */
            regularPrice: 200000,
            /** @description 마지막 수정일 */
            lastEditDate: new Date(),
            /** @description 등록일 */
            regDate: new Date(),
            /** @description 상품명 */
            itemName: '미쿡과자6',
            /** @description 스토어 타이틀 */
            storeTitle: '행복나라6',
            /** @description 나라 */
            nation: 'us6',
            /** @description 판매중 여부 */
            isSelling: true,
            /** @description 배송비 */
            shippingFee: 10006,
            /** @description 구간 배송비 - 첫번째 구간 금액 */
            sectionShippingFee: 10006,
        }
    ],
    totalCount: 6,
};

export default selectionItemConnectForAdminsMock;