import {
  aboutUsIcon,
  callIcon,
  darkModeIcon,
  doubleSaveIcon,
  FAQsIcon,
  followIcon,
  inforIcon,
  noiceIcon,
  notiIcon,
  RateIcon,
} from '../assets/svgXml';
import {vw} from './styleSheet';

export const LocationData = [
  {
    name: 'Hanoi',
    description: 'Mưa rào',
    temperature: 28,
    long: 105.804817,
    lad: 21.028511,
  },
  {
    name: 'Tp HCM',
    description: 'Mưa rải rác',
    temperature: 26,
    long: 106.660172,
    lad: 10.762622,
  },
  {
    name: 'Lào Cai',
    description: 'Quang mây',
    temperature: 26,
    long: 103.975,
    lad: 22.48056,
  },
  {
    name: 'Hòa Bình',
    description: 'Nhiều mây',
    temperature: 26,
    long: 105.33759,
    lad: 20.81717,
  },
];

export const AdditionLocaiton = [
  {
    name: 'Yên Bái',
    description: 'Mưa rải rác',
    temperature: 24,
    long: 104.871,
    lad: 21.722,
  },
  {
    name: 'Lạng Sơn',
    description: 'Quang mây',
    temperature: 31,
    long: 103.975,
    lad: 22.48056,
  },
  {
    name: 'Quảng Ninh',
    description: 'Mưa phùn',
    temperature: 30,
    long: 105.33759,
    lad: 20.81717,
  },
];

export const StormLevelData = [
  {
    title: 'Bão Cấp 1 (Tốc độ gió từ 74-95 km/h)',
    characteristic:
      'Gió mạnh vừa, có thể gây ra thiệt hại nhẹ cho cây cối, nhà cửa không kiên cố và hệ thống điện.',
    preventiveMeasures: [
      'Kiểm tra nhà cửa: Đảm bảo các cửa sổ, cửa chính được đóng chặt, gia cố lại mái nhà nếu cần.',
      'Dọn dẹp sân vườn: Loại bỏ các vật dụng nhẹ hoặc cố định chúng để tránh bị gió cuốn đi.',
      'Chuẩn bị đồ dùng cần thiết: Sạc đầy điện thoại, pin dự phòng, và chuẩn bị đèn pin, nước uống, thực phẩm dự trữ.',
    ],
  },
  {
    title: 'Bão Cấp 2 (Tốc độ gió từ 96-110 km/h)',
    characteristic:
      'Gió mạnh hơn, có khả năng làm bật gốc cây nhỏ, hư hại một số mái nhà và gây mất điện cục bộ.',
    preventiveMeasures: [
      'Hạn chế ra ngoài: Chỉ ra ngoài khi thực sự cần thiết; tránh gần các vật cao và yếu như cây cối, cột điện.',
      'Cập nhật thông tin thường xuyên: Theo dõi các bản tin dự báo bão từ cơ quan khí tượng để biết hướng di chuyển và diễn biến của bão.',
      'Chuẩn bị nơi trú ẩn an toàn: Đảm bảo có kế hoạch di chuyển đến nơi trú ẩn an toàn nếu cần thiết.',
    ],
  },
  {
    title: 'Bão Cấp 3 (Tốc độ gió từ 111-130 km/h)',
    characteristic:
      'Gió rất mạnh, có thể gây thiệt hại đáng kể cho cây cối, nhà cửa và hệ thống điện.',
    preventiveMeasures: [
      'Gia cố nhà cửa: Đảm bảo tất cả các cửa sổ và cửa chính được gia cố chắc chắn.',
      'Di chuyển đến nơi an toàn: Nếu nhà không kiên cố, hãy di chuyển đến nơi trú ẩn an toàn.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
    ],
  },
  {
    title: 'Bão Cấp 4 (Tốc độ gió từ 131-155 km/h)',
    characteristic:
      'Gió cực mạnh, có thể gây thiệt hại nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản đến nơi an toàn.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 5 (Tốc độ gió từ 156-180 km/h)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 6 (Tốc độ gió từ 181-210 km/h)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 7 (Tốc độ gió từ 211-250 km/h)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 8 (Tốc độ gió từ 251-300 km/h)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 9 (Tốc độ gió từ 301-350 km/h)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 10 (Tốc độ gió từ 351-400 km/h)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 11 (Tốc độ gió từ 401-450 km/h)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 12 (Tốc độ gió từ 451 km/h trở lên)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 13 (Tốc độ gió từ 451-500 km/h)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 14 (Tốc độ gió từ 501-550 km/h)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 15 (Tốc độ gió từ 551-600 km/h)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
  {
    title: 'Bão Cấp 16 (Tốc độ gió từ 601-650 km/h)',
    characteristic:
      'Gió cực kỳ mạnh, có thể gây thiệt hại rất nghiêm trọng cho nhà cửa, cây cối và hệ thống điện.',
    preventiveMeasures: [
      'Di tản ngay lập tức: Nếu sống trong khu vực dễ bị ảnh hưởng, hãy di tản ngay lập tức.',
      'Chuẩn bị đồ dùng cần thiết: Đảm bảo có đủ nước uống, thực phẩm, và các vật dụng cần thiết khác.',
      'Theo dõi thông tin: Liên tục cập nhật thông tin từ cơ quan chức năng.',
    ],
  },
];

export const Self = [
  {
    icon: inforIcon(vw(7), vw(7)),
    title: 'Thông tin tài khoản',
  },
  {
    icon: doubleSaveIcon(vw(7), vw(7)),
    title: 'Bài viết đã lưu',
  },
];

export const SystemSetting = [
  {
    icon: darkModeIcon(vw(7), vw(7)),
    title: 'Chế độ tối',
  },
  {
    icon: notiIcon(vw(7), vw(7)),
    title: 'Thông báo',
  },
  {
    icon: noiceIcon(vw(7), vw(7)),
    title: 'Âm thanh',
  },
];

export const HelpCenter = [
  {
    icon: aboutUsIcon(vw(7), vw(7)),
    title: 'Chúng tôi là ai',
  },
  {
    icon: FAQsIcon(vw(7), vw(7)),
    title: 'FAQs',
  },
  {
    icon: callIcon(vw(7), vw(7)),
    title: 'Liên hệ',
  },
];

export const OtherInfor = [
  {
    icon: followIcon(vw(7), vw(7)),
    title: 'Theo dõi',
  },
  {
    icon: RateIcon(vw(7), vw(7)),
    title: 'Đánh giá',
  },
];

export function getWeekDays(): {dayOfWeek: string; date: string}[] {
  const daysOfWeek = ['CN', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7'];
  const today = new Date();
  const result = [];

  for (let i = -3; i <= 3; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayOfWeek = i === 0 ? 'H.nay' : daysOfWeek[date.getDay()];
    const formattedDate = date.getDate().toString().padStart(2, '0'); // Ensure two digits

    result.push({dayOfWeek, date: formattedDate});
  }

  return result;
}

const generateRandomValue = (average: number, range: number) => {
  const min = average - range;
  const max = average + range;
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomValue;
};

const generateData = (average: number, range: number) => [
  {value: generateRandomValue(average, range), label: '00 giờ'},
  {value: generateRandomValue(average, range), label: '02 giờ'},
  {value: generateRandomValue(average, range), label: '04 giờ'},
  {value: generateRandomValue(average, range), label: '06 giờ'},
  {value: generateRandomValue(average, range), label: '08 giờ'},
  {value: generateRandomValue(average, range), label: '10 giờ'},
  {value: generateRandomValue(average, range), label: '12 giờ'},
];

const getApSuatKhiQuyenData = () => generateData(1000, 500); // Average atmospheric pressure in hPa
const getTocDoGioData = () => generateData(40, 30); // Average wind speed in m/s
const getLuongMuaData = () => generateData(35, 20); // Average rainfall in mm
const getNhietDoMatBienData = () => generateData(20, 15); // Average sea surface temperature in °C
const getDoAmData = () => generateData(50, 30); // Average humidity in %

export {
  getApSuatKhiQuyenData,
  getTocDoGioData,
  getLuongMuaData,
  getNhietDoMatBienData,
  getDoAmData,
};

// Example usage:
export const apSuatKhiQuyenData = getApSuatKhiQuyenData();
export const tocDoGioData = getTocDoGioData();
export const luongMuaData = getLuongMuaData();
export const nhietDoMatBienData = getNhietDoMatBienData();
export const doAmData = getDoAmData();

export const apSuatKhiQuyenPopUp = {
  safe: [
    'Áp suất khí quyển bình thường ở mực nước biển là khoảng  1013 hPa (hectopascal).',
    'Khi áp suất duy trì ở mức trên hoặc gần với giá trị này, không có dấu hiệu cho thấy sự hình thành của bão.',
  ],
  danger: [
    'Dưới 1005 hPa: Áp suất giảm thấp hơn mức bình thường có thể cho thấy một vùng áp thấp đang hình thành.',
    'Dưới 1000 hPa: Đây thường là mức áp suất mà các nhà khí tượng học bắt đầu chú ý đến khả năng hình thành bão nhiệt đới.',
    'Dưới 980 hPa: Áp suất rất thấp, thường cho thấy bão đang phát triển và có khả năng trở nên mạnh hơn.',
  ],
};

export const nhietDoMatBienPopup = {
  safe: [
    'Nhiệt độ bề mặt biển dưới 26°C thường không đủ để cung cấp năng lượng cần thiết cho sự hình thành của bão nhiệt đới.',
  ],
  danger: [
    'Trên 26-28°C: Đây là mức nhiệt độ tối thiểu để hỗ trợ sự hình thành và phát triển của bão nhiệt đới.',
    'Trên 28°C: Nhiệt độ càng cao, càng cung cấp nhiều năng lượng cho sự phát triển của bão mạnh.',
  ],
};

export const tocDoGioPopup = {
  safe: [
    'Tốc độ gió dưới  37 km/h (khoảng 20 knots) thường được coi là gió nhẹ và không có nguy cơ hình thành bão.',
  ],
  danger: [
    '37-63 km/h (20-34 knots): Gió mạnh hơn, có thể là dấu hiệu của một hệ thống thời tiết đang phát triển hoặc một cơn áp thấp nhiệt đới.',
    '63-118 km/h (34-64 knots): Tốc độ gió đạt mức báo động cho một bão nhiệt đới.',
    'Trên 118 km/h (64 knots): Tốc độ gió mạnh tương ứng với một cơn bão nhiệt đới cấp 1 trở lên (theo thang Saffir-Simpson).',
  ],
};

export const doAmPopup = {
  safe: [
    'Độ ẩm tương đối trong khí quyển dưới 50-60% thường không tạo điều kiện thuận lợi cho sự hình thành bão nhiệt đới.',
  ],
  danger: [
    'Trên 60%: Độ ẩm tương đối cao trong tầng thấp và tầng trung của khí quyển là cần thiết cho sự hình thành bão nhiệt đới. ',
    'Trên 70-80%: Độ ẩm cao hơn nữa hỗ trợ quá trình ngưng tụ và tạo mây, góp phần hình thành và phát triển bão.',
  ],
};

export const luongMuaPopup = {
  safe: [
    'Lượng mưa trung bình dưới **20 mm/giờ thường không gây ra nguy cơ lũ lụt hoặc tạo thành bão.',
  ],
  danger: [
    'Trên 20-50 mm/giờ: Có thể gây ra mưa lớn và ngập úng ở một số khu vực, đặc biệt là khi lượng mưa này kéo dài trong nhiều giờ.',
    'Trên 50 mm/giờ: Thường liên quan đến các trận mưa cực lớn và bão nhiệt đới, gây ra nguy cơ lũ quét, sạt lở đất.',
  ],
};
