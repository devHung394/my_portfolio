export type ProjectContent = {
  subtitle?: string;
  period?: string;
  role?: string;
  bullets: string[];
  why?: string;
};

export type ProjectCategory = "product" | "transformation";

export type Project = {
  title: string;
  category: ProjectCategory;
  stack: string[];
  links?: { live?: string; repo?: string };
  image: string;
  content: {
    vi: ProjectContent;
    en: ProjectContent;
  };
};

export const PROJECTS: Project[] = [
  {
    title: "AHH Travel",
    category: "product",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "DeepFM",
      "Tailwind CSS",
      "Cloudinary",
      "JWT",
      "VNPay",
      "MoMo",
    ],
    links: {
      live: "https://ahhtravel.netlify.app",
      repo: "https://github.com/QuocHung-0309/TLCN-FE.git",
    },
    image: "/ahhtravel.png",
    content: {
      vi: {
        subtitle: "Hệ thống đặt tour du lịch tích hợp AI gợi ý cá nhân hóa",
        period: "02/2025 – 07/2025",
        role: "Nhóm 3 người · Full-stack Developer",
        bullets: [
          "Phát triển hệ thống đặt tour du lịch trực tuyến với đầy đủ chức năng cho khách hàng và quản trị viên, tích hợp mô hình AI DeepFM để cá nhân hóa gợi ý tour dựa trên hành vi và sở thích người dùng.",
          "Phát triển mô hình AI Recommendation sử dụng thuật toán DeepFM nhằm nâng cao trải nghiệm gợi ý tour.",
          "Tích hợp cổng thanh toán trực tuyến VNPay và MoMo.",
          "Thiết kế dashboard thống kê doanh thu, đơn đặt tour, địa điểm nổi bật và báo cáo trực quan.",
          "Thiết kế và phát triển giao diện người dùng bằng Next.js và Tailwind CSS theo hướng responsive.",
          "Xây dựng RESTful API phục vụ quản lý tour, lịch khởi hành, đặt tour, thanh toán và quản lý người dùng.",
          "Xây dựng hệ thống phân quyền giữa khách hàng và quản trị viên bằng JWT.",
          "Tối ưu hiệu năng hệ thống và trải nghiệm trên cả máy tính và thiết bị di động.",
        ],
        why: "Đây là Khóa luận tốt nghiệp của mình, muốn thử ứng dụng AI thật vào một sản phẩm thật, không chỉ dừng ở lý thuyết trên lớp.",
      },
      en: {
        subtitle: "AI-powered personalized tour recommendation booking system",
        period: "Feb 2025 – Jul 2025",
        role: "Team of 3 · Full-stack Developer",
        bullets: [
          "Built an online tour booking system with full functionality for both customers and admins, integrating a DeepFM AI model to personalize tour recommendations based on user behavior and preferences.",
          "Developed an AI recommendation model using the DeepFM algorithm to improve tour suggestions.",
          "Integrated VNPay and MoMo online payment gateways.",
          "Designed a dashboard for revenue, bookings, popular destinations, and visual reports.",
          "Designed and built the user interface with Next.js and Tailwind CSS, fully responsive.",
          "Built RESTful APIs for managing tours, departure schedules, bookings, payments, and users.",
          "Built role-based access control between customers and admins using JWT.",
          "Optimized system performance and experience across desktop and mobile.",
        ],
        why: "This was my graduation thesis, wanted to apply real AI to a real product, not just theory from class.",
      },
    },
  },
  {
    title: "FlowerGrad",
    category: "product",
    stack: ["TypeScript", "React", "Tailwind CSS"],
    links: { live: "https://flower-shop-five-wine.vercel.app/" },
    image: "/flowergrad.jpg",
    content: {
      vi: {
        subtitle: "Thương mại điện tử gây quỹ",
        period: "04/2025 – 05/2025",
        role: "Làm một mình",
        bullets: [
          "Nền tảng bán hoa bó để gây quỹ cho Đoàn - Hội Khoa.",
          "Giao diện gọn gàng, danh mục sản phẩm, giỏ hàng, luồng thanh toán trực quan.",
        ],
        why: "Làm để giúp khoa gây quỹ trong một chiến dịch tình nguyện, dự án đầu tiên mình làm trọn từ đầu đến cuối.",
      },
      en: {
        subtitle: "E-commerce for fundraising",
        period: "Apr 2025 – May 2025",
        role: "Solo developer",
        bullets: [
          "E-commerce platform selling flower bouquets to support Youth Union & Student Association.",
          "Clean UI, catalog, cart; intuitive checkout flow.",
        ],
        why: "Built to help my faculty raise funds during a volunteer campaign, the first project I owned start to finish.",
      },
    },
  },
  {
    title: "CisnW Music App",
    category: "product",
    stack: ["Java", "Retrofit", "Spring Boot", "MySQL"],
    links: { repo: "https://github.com/QuocHung-0309/music_app_FE.git" },
    image: "/cisnw.jpg",
    content: {
      vi: {
        subtitle: "Ứng dụng nghe nhạc Android",
        period: "02/2025 – 04/2025",
        role: "Frontend developer",
        bullets: [
          "Trải nghiệm nghe nhạc mượt, tạo playlist; kiểm thử trên nhiều kích thước màn hình.",
        ],
        why: "Muốn thử xem mình có thể đưa 1 file Figma thành ứng dụng Android chạy thật hay không, chứ không chỉ dừng ở màn hình tĩnh.",
      },
      en: {
        subtitle: "Android music streaming",
        period: "Feb 2025 – Apr 2025",
        role: "Frontend developer",
        bullets: ["Seamless listening, playlists; tested across screen sizes."],
        why: "Wanted to see if I could take a Figma file all the way to a working Android app, not just a static screen.",
      },
    },
  },
  {
    title: "YOUTH-FIT",
    category: "transformation",
    stack: ["TypeScript", "React", "Tailwind CSS"],
    links: {
      repo: "https://github.com/ITUTE/youth",
      live: "https://youth-itute.vercel.app/",
    },
    image: "/yfit.jpg",
    content: {
      vi: {
        subtitle: "Văn phòng điện tử cho Đoàn - Hội Khoa",
        period: "09/2024 – 12/2024",
        role: "Frontend developer",
        bullets: [
          "Quản lý công việc với điều hướng rõ ràng; giao diện responsive cho vận hành nội bộ.",
        ],
        why: "Trang website về Đoàn Thanh niên - Hội sinh viên Khoa Công nghệ Thông tin trường Đại học Công nghệ Kỹ thuật TP.HCM ",
      },
      en: {
        subtitle: "Electronic office for Youth Union",
        period: "Sep 2024 – Dec 2024",
        role: "Frontend developer",
        bullets: [
          "Task management with clear navigation; responsive UI for internal ops.",
        ],
        why: "The union's paperwork was a mess of spreadsheets and group chats, this replaced a chunk of it.",
      },
    },
  },
  {
    title: "OriShop",
    category: "product",
    stack: ["Java", "Servlet/JSP", "Bootstrap", "SQL Server"],
    links: { repo: "https://github.com/QuocHung-0309/orishop.git" },
    image: "/orishop.jpg",
    content: {
      vi: {
        subtitle: "Thương mại điện tử mỹ phẩm",
        period: "09/2024 – 12/2024",
        role: "Frontend developer",
        bullets: ["Luồng mua sắm trực quan; triển khai bảo vệ CSRF."],
        why: "Một bài tập trên lớp nhưng lại là bài học thật đầu tiên của mình về bảo mật web.",
      },
      en: {
        subtitle: "Beauty e-commerce",
        period: "Sep 2024 – Dec 2024",
        role: "Frontend developer",
        bullets: ["Intuitive shopping flows; implemented CSRF protection."],
        why: "A class assignment that turned into my first real lesson in web security.",
      },
    },
  },
  {
    title: "Đọc Truyện Online",
    category: "product",
    stack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    links: { live: "https://tlcn-web-doc-truyen.vercel.app/" },
    image: "/truyen.png",
    content: {
      vi: {
        subtitle: "Website đọc truyện trực tuyến kết hợp thương mại điện tử",
        period: "07/2025 – 12/2025",
        role: "Nhóm 2 người · Full-stack Developer",
        bullets: [
          "Phát triển nền tảng đọc truyện trực tuyến tích hợp mô hình thương mại điện tử, đọc miễn phí hoặc trả phí, quản lý thư viện cá nhân.",
          "Thiết kế và phát triển giao diện người dùng bằng ReactJS.",
          "Xây dựng API quản lý truyện, chương truyện, người dùng và đơn hàng.",
          "Phát triển chức năng đăng ký, đăng nhập và phân quyền người dùng.",
          "Xây dựng hệ thống quản trị phục vụ quản lý truyện, danh mục, người dùng và doanh thu.",
          "Tối ưu chức năng tìm kiếm, lọc và phân loại truyện.",
        ],
        why: "Muốn thử làm một nền tảng nội dung số có mô hình kinh doanh thật, không chỉ dừng ở giao diện đọc truyện đơn thuần.",
      },
      en: {
        subtitle: "Online reading platform with e-commerce",
        period: "Jul 2025 – Dec 2025",
        role: "Team of 2 · Full-stack Developer",
        bullets: [
          "Built an online reading platform combined with an e-commerce model, free or paid chapters, personal library management.",
          "Designed and built the user interface with ReactJS.",
          "Built APIs for managing stories, chapters, users, and orders.",
          "Developed registration, login, and role-based access control.",
          "Built an admin system for managing stories, categories, users, and revenue.",
          "Optimized search, filtering, and story categorization.",
        ],
        why: "Wanted to try building a content platform with a real business model, not just a story-reading UI.",
      },
    },
  },
  {
    title: "Số hóa Nghĩa trang Liệt sĩ tỉnh Đồng Tháp",
    category: "transformation",
    stack: [
      "ReactJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Leaflet",
      "QR Code",
    ],
    links: { live: "https://sohoanghiatranglietsi.dongthap.gov.vn/" },
    image: "/sohoa.jpg",
    content: {
      vi: {
        subtitle: "Hệ thống số hóa dữ liệu nghĩa trang liệt sĩ",
        period: "07/2024 – 03/2025",
        role: "Nhóm 5 người · UX/UI Designer",
        bullets: [
          "Tham gia phát triển hệ thống số hóa dữ liệu nghĩa trang liệt sĩ tỉnh Đồng Tháp phục vụ quản lý, lưu trữ và tra cứu thông tin liệt sĩ.",
          "Xây dựng giao diện tra cứu thông tin liệt sĩ theo nhiều tiêu chí.",
          "Phát triển chức năng hiển thị sơ đồ và vị trí phần mộ trên bản đồ.",
          "Xây dựng hệ thống quản trị dữ liệu nghĩa trang và hồ sơ liệt sĩ.",
          "Tối ưu tốc độ tìm kiếm và hiển thị dữ liệu.",
        ],
        why: "Dự án cộng đồng có ý nghĩa nhất mình từng làm, giúp thân nhân liệt sĩ tra cứu thông tin dễ dàng hơn.",
      },
      en: {
        subtitle: "Martyrs' cemetery digitization system",
        period: "Jul 2024 – Mar 2025",
        role: "Team of 5 · UX/UI Designer",
        bullets: [
          "Helped build a digitization system for Đồng Tháp province's martyrs' cemetery data, for management, storage, and lookup.",
          "Built a lookup interface for searching martyr records by multiple criteria.",
          "Developed a feature to display grave layout and location on a map.",
          "Built an admin system for managing cemetery data and martyr records.",
          "Optimized search speed and data display.",
        ],
        why: "The most meaningful community project I've worked on, it helps martyrs' families find information more easily.",
      },
    },
  },
  {
    title: "Website Đại hội Đại biểu Hội Sinh viên Việt Nam Trường",
    category: "transformation",
    stack: ["ReactJS", "Tailwind CSS", "Node.js"],
    links: { live: "https://dhhsv.netlify.app/" },
    image: "/BieuTrung.png",
    content: {
      vi: {
        subtitle: "Website chính thức phục vụ Đại hội Đại biểu Hội Sinh viên",
        period: "09/2025 – 10/2025",
        role: "Làm một mình · Full-stack Developer",
        bullets: [
          "Xây dựng website chính thức phục vụ Đại hội Đại biểu Hội Sinh viên Việt Nam cấp trường, cung cấp thông tin chương trình, đại biểu, tài liệu, tin tức.",
          "Thiết kế và phát triển giao diện hiện đại, thân thiện trên nhiều thiết bị.",
          "Xây dựng các trang giới thiệu, lịch trình, đại biểu, tài liệu và tin tức.",
          "Tối ưu hiệu năng tải trang và trải nghiệm người dùng.",
          "Phối hợp cùng đội thiết kế và nội dung để triển khai đúng tiến độ.",
        ],
        why: "Làm một mình trong thời gian gấp, học được cách tự cân bằng giữa tốc độ và chất lượng.",
      },
      en: {
        subtitle: "Official website for the Student Association Congress",
        period: "Sep 2025 – Oct 2025",
        role: "Solo · Full-stack Developer",
        bullets: [
          "Built the official website for the school's Student Association Congress, covering the program, delegates, documents, and news.",
          "Designed and built a modern, device-friendly interface.",
          "Built pages for overview, schedule, delegates, documents, and news.",
          "Optimized page performance and user experience.",
          "Coordinated with the design and content teams to stay on schedule.",
        ],
        why: "Built solo under a tight deadline, it taught me how to balance speed and quality.",
      },
    },
  },
  {
    title: "Số hóa Di tích Lịch sử xã Tân Phú",
    category: "transformation",
    stack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "QR Code"],
    links: { live: "https://xatanphu.vercel.app/" },
    image: "/tanphu.jpg",
    content: {
      vi: {
        subtitle:
          "Số hóa di tích lịch sử, xã Tân Phú, huyện Thanh Bình, Đồng Tháp",
        period: "07/2023 – 10/2023",
        role: "Nhóm 3 người · Full-stack Developer",
        bullets: [
          "Phát triển nền tảng số hóa các di tích lịch sử tại xã Tân Phú để lưu trữ, bảo tồn và quảng bá giá trị văn hóa - lịch sử địa phương.",
          "Xây dựng giao diện hiển thị thông tin và hình ảnh các di tích.",
          "Phát triển API quản lý dữ liệu di tích và nội dung lịch sử.",
          "Tích hợp QR Code giúp người dân và du khách tra cứu thông tin trực tiếp tại từng địa điểm.",
          "Xây dựng thư viện hình ảnh và nội dung đa phương tiện.",
          "Tối ưu khả năng hiển thị trên máy tính và thiết bị di động.",
        ],
        why: "Dự án đầu tiên mình làm về số hóa di sản văn hóa, dùng QR code để nối thế giới thực với nội dung online.",
      },
      en: {
        subtitle: "Historical site digitization, Tân Phú commune, Đồng Tháp",
        period: "Jul 2023 – Oct 2023",
        role: "Team of 3 · Full-stack Developer",
        bullets: [
          "Built a digitization platform for historical sites in Tân Phú commune to preserve and promote local cultural heritage.",
          "Built an interface to display information and images of the historical sites.",
          "Developed APIs for managing site data and historical content.",
          "Integrated QR codes so locals and visitors can look up information on-site.",
          "Built a media library for images and multimedia content.",
          "Optimized display across desktop and mobile devices.",
        ],
        why: "My first project digitizing cultural heritage, using QR codes to connect the physical site with online content.",
      },
    },
  },
  {
    title: "Số hóa Di tích Lịch sử xã Kiểng Phước",
    category: "transformation",
    stack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "QR Code"],
    links: { live: "https://xtn2024.vercel.app/" },
    image: "/kiengphuoc.jpg",
    content: {
      vi: {
        subtitle:
          "Số hóa di tích lịch sử, xã Kiểng Phước, huyện Gò Công Đông, Tiền Giang",
        period: "01/2024",
        role: "Nhóm 2 người · Full-stack Developer",
        bullets: [
          "Xây dựng nền tảng số hóa các di tích lịch sử và văn hóa của xã Kiểng Phước phục vụ bảo tồn, quảng bá và hỗ trợ người dân, du khách tiếp cận thông tin.",
          "Phát triển giao diện và hệ thống quản lý dữ liệu di tích.",
          "Xây dựng API phục vụ lưu trữ và hiển thị thông tin lịch sử.",
          "Tích hợp QR Code để truy cập nhanh nội dung tại từng điểm di tích.",
          "Thiết kế giao diện responsive, tối ưu trên nhiều thiết bị.",
        ],
        why: "Tiếp nối tinh thần từ dự án Tân Phú, lần này rút kinh nghiệm để triển khai gọn và nhanh hơn.",
      },
      en: {
        subtitle:
          "Historical site digitization, Kiểng Phước commune, Tiền Giang",
        period: "Jan 2024",
        role: "Team of 2 · Full-stack Developer",
        bullets: [
          "Built a digitization platform for the historical and cultural sites of Kiểng Phước commune to support preservation and public access.",
          "Developed the interface and data management system for the sites.",
          "Built APIs for storing and displaying historical information.",
          "Integrated QR codes for quick access to content at each site.",
          "Designed a responsive interface optimized across devices.",
        ],
        why: "A follow-up to the Tân Phú project, this time streamlined to ship faster.",
      },
    },
  },
];
