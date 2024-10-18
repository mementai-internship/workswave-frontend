// import * as Accordion from '@radix-ui/react-accordion';
// import React from 'react';
// import { PiArrowDownBold, PiArrowUpBold } from 'react-icons/pi';

// import DragItem from '@/components/BasicSetting/holidaySetting/DragItem';
// import StrictModeDroppable from '@/components/BasicSetting/holidaySetting/StrictModeDroppable';

// interface IPropsType {
//   children: React.ReactNode;
//   categoryId: string;
//   category: string;
//   contents: { id: string; name: string; isGhosting: boolean }[];
//   openCategories: string[];
//   handleToggleCategory: (categoryId: string) => void;
// }

// export default function DragAccordionItem({
//   children,
//   categoryId,
//   category,
//   contents,
//   openCategories,
//   handleToggleCategory,
// }: IPropsType) {
//   return (
//     <Accordion.Item key={categoryId} value={categoryId} className="border-b">
//       <Accordion.Header className="border-b">
//         <Accordion.Trigger
//           className="w-full flex justify-between items-center text-left p-4"
//           onClick={() => handleToggleCategory(categoryId)}
//         >
//           <p className="text-lg font-semibold">{category}</p>
//           <div className="rounded-full bg-purple-50 p-2">
//             {!openCategories.includes(categoryId) ? (
//               <PiArrowDownBold color="white" />
//             ) : (
//               <PiArrowUpBold color="white" />
//             )}
//           </div>
//         </Accordion.Trigger>
//       </Accordion.Header>
//       <Accordion.Content>{children}</Accordion.Content>
//     </Accordion.Item>
//   );
// }
