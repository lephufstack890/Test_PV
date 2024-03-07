import React from 'react';

function minCandies(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1); // Bắt đầu với mỗi đứa trẻ có ít nhất 1 viên kẹo

    // Duyệt từ trái sang phải, cập nhật số kẹo cho đứa trẻ i dựa trên xếp hạng của đứa trẻ i và đứa trẻ i-1
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Duyệt từ phải sang trái, cập nhật số kẹo cho đứa trẻ i dựa trên xếp hạng của đứa trẻ i và đứa trẻ i+1
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Tính tổng số lượng kẹo cần phân phát
    return candies.reduce((sum, candy) => sum + candy, 0);
}

function Test1() {
    return (
        <h1>{minCandies([1, 0, 2])}</h1>
    )
}

export default Test1;
