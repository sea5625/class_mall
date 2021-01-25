import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@class101/ui";
import { PAGINATION_LIMIT } from "../../utills/const";

type Props = {
    page: number;
    setPage: (_page: number) => void;
    total?: number;
};
const Pagination = ({ page, setPage, total = 0 }: Props) => {
    const totalPage = Math.ceil(total / PAGINATION_LIMIT);
    return (
        <ButtonGroup fill>
            <Button
                size={"xs"}
                color={"orange"}
                onClick={() => {
                    setPage(page - 1);
                }}
                disabled={page === 1}
            >
                prev
            </Button>
            <Button
                size={"xs"}
                color={"orange"}
                disabled={totalPage === page}
                onClick={() => {
                    setPage(page + 1);
                }}
            >
                next
            </Button>
        </ButtonGroup>
    );
};

export default Pagination;
