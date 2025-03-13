export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text; // Nếu chuỗi ngắn hơn maxLength, không cần cắt

    const truncated = text.substring(0, maxLength - 3); // Trừ đi 3 ký tự để dành chỗ cho "..."
    const lastSpaceIndex = truncated.lastIndexOf(" "); // Tìm khoảng trắng gần nhất

    if (lastSpaceIndex > 0) {
        return truncated.substring(0, lastSpaceIndex) + "..."; // Cắt đến khoảng trắng gần nhất
    } else {
        return truncated + "..."; // Nếu không tìm thấy khoảng trắng, cứ cắt luôn
    }
}
